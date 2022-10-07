# Trust Zone Model

A Trust Zone is an environment, circumscribed by a conceptual boundary, which affords assets stored or processed within that environment a level of protection based on the _trustworthiness_ of that Trust Zone.  

The trustworthiness of a trust zone may be impacted by several factors, such as the ease and level of access to the environment by potential threat actors. The confidence that we have in whether data assets in a trust zone can be protected has to be underpinned by controls implemented and their efficacy. We will however model this trustworthiness by a CIA triad confidence as described below:


## Trust Zone Trustworthiness Confidence Factors

These metrics describe the percentage confidence that we have that confidentiality, integrity and availability of data assets can be protected within a trust zone.

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
<th>Examples</th>
</tr>

<tr>
<td>confidentiality</td>
<td>integer</td>
<td>From 0 to 100. What is our confidence that confidentiality of data can be protected in this trust zone?</td>
<td>
zt.zone.conf: 90
</td>
</tr>

<tr>
<td>integrity</td>
<td>integer</td>
<td>From 0 to 100. What is our confidence that integrity of data can be protected in this trust zone?</td>
<td>
zt.zone.int: 20
</td>
</tr>


<tr>
<td>availability</td>
<td>integer</td>
<td>From 0 to 100. What is our confidence that availability of data can be protected in this trust zone?</td>
<td>
zt.zone.avail: 20
</td>
</tr>



</table>
<br />